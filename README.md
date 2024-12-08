# Webapp Template with Next.js, Nest.js, and GCP/Vercel

This template includes a Next.js frontend and a Nest.js backend. The backend is deployed to GCP and the frontend is deployed to Vercel.

## Local Development

1. Install dependencies:

```bash
cd frontend && npm install
cd backend && npm install
```

2. Start up the app:

```bash
make build up-dev
```

## Cloud Deployment

The deployment is handled by GitHub Actions. When a push is made to the main branch, the app is built and deployed to GCP and Vercel.

Secrets are required for the deployment to GCP and Vercel. They are stored in the repository secrets.

These are the secrets that are required:

- `DOCKERHUB_USERNAME`: The Docker Hub username.
- `DOCKERHUB_TOKEN`: The Docker Hub token.
- `GCP_SA_KEY`: The service account key for the GCP project.
- `VERCEL_TOKEN`: The Vercel token for the Vercel project.
- `API_URL`: The URL of the deployed backend.

## Troubleshooting

The GCP service account must be able to set the IAM policy for the Cloud Run service to allow all users to invoke the service.

The Vercel project must have the API_URL environment variable set to the URL of the deployed backend, which means the deployment must be successful before the frontend can be deployed.