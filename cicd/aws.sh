
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
      volumes:
      - name: ugouv-apps-efs-pvc
        persistentVolumeClaim:
          claimName: ugouv-apps-efs-pvc
      containers:
      - env:
        - name: DATABASE_URL
          value: "mysql://admin:XtFc;s%232-sLMx}dq!@fcz-apps-rds-master.chlyq6uxnmog.eu-west-1.rds.amazonaws.com:3306/$DATABASE_NAME"
        image: 685288883234.dkr.ecr.eu-west-1.amazonaws.com/$PROJECT_NAME:$TAG
        imagePullPolicy: Always
        name: $PROJECT_NAME
        ports:
        - containerPort: 80
          name: $PROJECT_NAME
          protocol: TCP
        resources:
          limits:
            cpu: 1
            memory: 4Gi
          requests:
            cpu: 1
            memory: 4Gi
        volumeMounts:
        - mountPath: /var/www/project/public/images
          name: ugouv-apps-efs-pvc
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ugouv-apps-efs-pvc
  namespace: default
spec:
  accessModes:
  - ReadWriteMany
  resources:
    requests:
      storage: 100Gi
  storageClassName: efs-sc
  volumeName: ugouv-apps-efs-pv
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: ugouv-apps-efs-pv
spec:
  accessModes:
  - ReadWriteMany
  capacity:
    storage: 100Gi
  claimRef:
    apiVersion: v1
    kind: PersistentVolumeClaim
    name: ugouv-apps-efs-pvc
    namespace: default
  csi:
    driver: efs.csi.aws.com
    volumeHandle: fs-0ab902f68114cffb1
  storageClassName: efs-sc
EOF
