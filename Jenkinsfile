pipeline {
    agent {
        docker {
            image 'node:10' 
             args '-p 4000:4000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Deploy'){
            steps{
                sh 'chmod +x ./jenkins/scripts/deploy.sh'
                sh './jenkins/scripts/deploy.sh'
            }
        }
    }
}