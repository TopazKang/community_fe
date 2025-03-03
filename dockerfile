# 🔹 Nginx 설정 적용 & 컨테이너 빌드
FROM nginx:latest

# 🔥 환경 변수 받아오기
ARG SERVER_NAME
ARG BACKEND_HOST
ARG BACKEND_PORT

# 🔹 React 빌드 결과물 복사
COPY build /usr/share/nginx/html

# 🔹 Nginx 설정 템플릿 복사
COPY nginx/nginx.template.conf /etc/nginx/nginx.template.conf

# 🔹 환경 변수 적용하여 `nginx.conf` 생성
RUN envsubst '$SERVER_NAME $BACKEND_HOST $BACKEND_PORT' < /etc/nginx/nginx.template.conf > /etc/nginx/nginx.conf
