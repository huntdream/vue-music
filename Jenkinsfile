pipeline {
    agent {
        docker {
            image 'node:10' 
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
                sh 'whoami'
                sh 'chmod +x ./jenkins/scripts/deploy.sh'
                sh './jenkins/scripts/deploy.sh'
            }
        }
    }
}