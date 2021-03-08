const config = {
  s3: {
    REGION: "ca-central-1",
    BUCKET: "notes-app-upload-yusufshalaby",
  },
  apiGateway: {
    REGION: "ca-central-1",
    URL: "https://ns9bau15qe.execute-api.ca-central-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ca-central-1",
    USER_POOL_ID: "ca-central-1_CiqJRHERd",
    APP_CLIENT_ID: "sqn1f8qvjrbq3k7pf2psor9rp",
    IDENTITY_POOL_ID: "ca-central-1:42c798b7-12e0-4a90-9f41-b857fe50f6b2",
  },
};

export default config;