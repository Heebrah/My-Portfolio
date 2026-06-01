
pipeline {
    agent any

   environment{
    DOCKERHUB_CREDENTIALS = credentials('ibdevop-dockerhub')
   }

   stages{
    stage('Build') {
        steps {
           bat 'docker build -t ibdevop/jenkins:latest .'
        }
    }
   }

   stages{
    stage('login'){
        steps {
            withCredentials([usernamePassword(credentialsId: 'ibdevop-dockerhub', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                bat "echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin"
            }
        }
    }
   }

   stages{
    stage('Push') {
        steps {
           bat 'docker push ibdevop/jenkins:latest'
        }
    }
   }
}
