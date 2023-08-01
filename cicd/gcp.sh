PROJECT_NAME=$1
TAG=$2
DATABASE_NAME=$1_main
cat << EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: $PROJECT_NAME
  name: $PROJECT_NAME
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: $PROJECT_NAME
      tier: frontend
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: $PROJECT_NAME
        tier: frontend
    spec:
      containers:
      - env:
        - name: DATABASE_URL
          value: "mysql://admin:XtFc;s%232-sLMx}dq!@10.190.96.4:3306/$DATABASE_NAME"
        image: eu.gcr.io/fcz-project/$PROJECT_NAME:$TAG
        imagePullPolicy: Always
        name: $PROJECT_NAME
        ports:
        - containerPort: 80
          name: $PROJECT_NAME
          protocol: TCP
        resources:
          limits:
            cpu: 500m
            memory: 500Mi
          requests:
            cpu: 200m
            memory: 500Mi
EOF
