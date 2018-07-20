#!/bin/bash

curl \-F 'client_id=55b167a2062e4a4787a69d2622e7748e' \
    -F 'client_secret=e4c097124b0d4e1d97bc5f709ec969f3' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=http://localhost:3004/auth' \
    -F 'code=942600ff047e446cb003fc09b8899412' \
    https://api.instagram.com/oauth/access_token


{"access_token": "334680324.55b167a.6683e4e379554501898c29cfd2f837a9", "user": {"id": "334680324", "username": "rfigueror", "profile_picture": "https://scontent.cdninstagram.com/vp/6007b6084dc32ebe7a07b4d5da0556ca/5BCC9454/t51.2885-19/10787748_1381442238813392_1680656097_a.jpg", "full_name": "Ricardo Figueroa", "bio": "", "website": "", "is_business": false}}
