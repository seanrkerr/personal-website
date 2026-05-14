SHELL=/bin/bash

deploy:
	echo "syncing bucket"
	aws s3 sync dist/. s3://$(BUCKET_NAME) --delete

invalidate:
	aws cloudfront create-invalidation \
    --distribution-id $(DISTRIBUTION_ID) \
    --paths "/*"
