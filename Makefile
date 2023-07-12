SHELL=/bin/bash

deploy:
	echo "BUCKET_NAME" $(BUCKET_NAME)
	aws s3 sync public/. s3://$(BUCKET_NAME)