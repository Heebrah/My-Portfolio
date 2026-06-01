pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('ibdevop-dockerhub')
    }

    stages {

        stage('Build') {
            steps {
                bat 'docker build -t ibdevop/jenkins:latest .'
            }
        }

        stage('Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'ibdevop-dockerhub',
                        usernameVariable: 'DOCKERHUB_USERNAME',
                        passwordVariable: 'DOCKERHUB_PASSWORD'
                    )
                ]) {
                    bat 'echo Username=%DOCKERHUB_USERNAME%'
                }
            }
        }
    }
}

//         stage('Push') {
//             steps {
//                 bat 'docker push ibdevop/jenkins:latest'
//             }
//         }

//     }
//     post {
//         success {
//             echo 'Docker image built and container started successfully!'
//         }

//         failure {
//             echo 'Pipeline failed!'
//         }
//     }

// }