
pipeline {
    agent any

    environment {
        IMAGE_NAME = "portfolio-app"
        CONTAINER_NAME = "portfolio-container"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                // Pull code from Git repositorygit
                git 'https://github.com/Heebrah/My-Portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat "docker build -t %IMAGE_NAME% ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop old container if it exists
                    bat "docker stop %CONTAINER_NAME% || exit 0"
                    bat "docker rm %CONTAINER_NAME% || exit 0"

                    // Run new container
                    bat "docker run -d -p 8080:80 --name %CONTAINER_NAME% %IMAGE_NAME%"
                }
            }
        }

    }

    post {
        success {
            echo 'Docker image built and container started successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
