pipeline {
    agent any
    environment {
        GITHUB_TOKEN = credentials('25ae89e1-778f-45b2-b3e5-51b6c43f2bf2')
        GITHUB_ORG = "MuhammadRidwan01"
        GITHUB_REPO = "nextjs-cicd-example"
        DEPLOY_USER = "www-data"
        DEPLOY_HOST = "192.168.1.101"
        DEPLOY_PATH = "/var/www/nextjs-tmp"
        LIVE_PATH = "/var/www/nextjs"
        NODE_ENV = "production"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    exportEnv()
                    postGithubStatus("pending", "CI/CD dimulai 🚀", "Jenkins/build-and-deploy")
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                script {
                    postGithubStatus("pending", "📦 Dependencies diinstal", "Jenkins/dependencies")
                }
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
                script {
                    postGithubStatus("pending", "🔧 Build selesai", "Jenkins/build")
                }
            }
        }

        stage('Export Static Files') {
            steps {
                sh 'npm run export'
                script {
                    postGithubStatus("pending", "📤 Proyek diexport", "Jenkins/export")
                }
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['jenkins-ssh']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no $DEPLOY_USER@$DEPLOY_HOST "mkdir -p $DEPLOY_PATH"
                        rsync -avz --delete ./out/ $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/
                        ssh -o StrictHostKeyChecking=no $DEPLOY_USER@$DEPLOY_HOST "mv $LIVE_PATH ${LIVE_PATH}-old || true"
                        ssh -o StrictHostKeyChecking=no $DEPLOY_USER@$DEPLOY_HOST "mv $DEPLOY_PATH $LIVE_PATH"
                        ssh -o StrictHostKeyChecking=no $DEPLOY_USER@$DEPLOY_HOST "rm -rf ${LIVE_PATH}-old || true"
                    """
                    script {
                        postGithubStatus("pending", "🚚 Dikirim ke Nginx", "Jenkins/deployment")
                    }
                }
            }
        }
    }

    post {
        success {
            script {
                postGithubStatus("success", "✅ CI/CD Next.js sukses!", "Jenkins/build-and-deploy")
            }
        }
        failure {
            script {
                postGithubStatus("failure", "❌ Gagal saat CI/CD", "Jenkins/build-and-deploy")
            }
        }
    }
}

def postGithubStatus(String state, String description, String context) {
    def commit = sh(script: "git rev-parse HEAD", returnStdout: true).trim()
    sh """
        curl -XPOST -H "Authorization: token ${GITHUB_TOKEN}" \
        https://api.github.com/repos/${GITHUB_ORG}/${GITHUB_REPO}/statuses/${commit} \
        -d '{
            "state": "${state}",
            "target_url": "${BUILD_URL}",
            "description": "${description}",
            "context": "${context}"
        }'
    """
}

def exportEnv() {
    env.BUILD_VERSION = sh(script: 'git describe --tags --always || echo "v0.0.1"', returnStdout: true).trim()
    env.BUILD_TIME = sh(script: 'date "+%Y-%m-%d %H:%M:%S"', returnStdout: true).trim()
    env.BUILD_ENV = "production"
}
