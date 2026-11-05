# DevOps Lab – Phase 4 files

This folder contains the application, Kubernetes manifests, and Jenkins pipelines from Phase 4 of the setup guide.

## Before using these files

1. Replace `DOCKER_USER` in `Jenkinsfile-q7`, `Jenkinsfile-q8`, and `Jenkinsfile-q9` with your Docker Hub username.
2. Keep the Jenkins credential ID as `dockerhub-creds`, matching the credential configured in Jenkins.
3. The Kubernetes manifests intentionally retain placeholders such as `IMAGE_PLACEHOLDER`, `IMAGE_TAG`, and `COLOR`; the Jenkins pipelines substitute these during deployment.
4. Create the GitHub repository with the default branch `main`, then upload the contents of this folder while preserving the `k8s/` directory.

## File layout

```text
.
├── Dockerfile
├── Jenkinsfile-q7
├── Jenkinsfile-q8
├── Jenkinsfile-q9
├── README.md
├── package.json
├── server.js
└── k8s/
    ├── blue-green.yaml
    ├── deployment.yaml
    ├── networkpolicy.yaml
    ├── secure-deployment.yaml
    └── service.yaml
```

## Notes

- `Jenkinsfile-q7` is the standard build, push, and Kubernetes deployment pipeline.
- `Jenkinsfile-q8` demonstrates blue-green deployment with a manual traffic-switch approval.
- `Jenkinsfile-q9` runs secret, dependency, static-analysis, Dockerfile, image, and DAST checks before/after deployment.
- The NetworkPolicy in `k8s/networkpolicy.yaml` selects pods labeled `app: db`; it only has an effect when matching database pods exist and the cluster networking plugin enforces NetworkPolicy.
