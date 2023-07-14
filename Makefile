SHELL=/bin/bash

deploy:
	echo "syncing bucket"
	aws s3 sync public/. s3://$(BUCKET_NAME)

invalidate:
	aws cloudfront create-invalidation \
    --distribution-id $(DISTRIBUTION_ID) \
    --paths "/*"