pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ibdevop/jenkins'
        DOCKER_TAG   = 'latest'
        DOCKERHUB_CREDENTIALS = credentials('ibdevop-dockerhub')
    }

    stages {
        stage('Build Docker Image') {
            steps {
                bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                bat "docker images ${DOCKER_IMAGE}:${DOCKER_TAG}"   

            }
            
        }
        stage('Stop Existing Container') {
            steps {
                bat "docker stop jenkins-container || echo 'No existing container to stop'"
                bat "docker rm jenkins-container || echo 'No existing container to remove'"
            }
        }
        stage('Run Docker Container') {
            steps {
                bat "docker run -d --name jenkins-container -p 8090:8080 ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }   

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'ibdevop-dockerhub',
                    usernameVariable: 'DOCKERHUB_USERNAME',
                    passwordVariable: 'DOCKERHUB_PASSWORD'
                )]) {
                    bat """
                        docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%
                    """
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                bat "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }
    }

    post {
        success {
            echo '🎉 Docker image built and pushed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
        always {
            // Optional: Clean up login
            bat 'docker logout || echo "Already logged out"'
        }
    }
}