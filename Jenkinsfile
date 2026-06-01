pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('ibdevop-dockerhub')
    }

    stages {
        stage('Docker Login') {
            steps {
                bat '''
                echo %DOCKERHUB_CREDENTIALS_PSW% | docker login -u %DOCKERHUB_CREDENTIALS_USR% --password-stdin
                '''
            }
        }
    }
}