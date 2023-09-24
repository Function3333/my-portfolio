FROM node:14

WORKDIR ./

COPY ./package*.json ./

RUN npm install --production ## dev-dependencies 제외하고 설치

COPY . . # Docker 이미지 안에 앱 소스코드를 넣는다

EXPOSE 3000 # 포트 바인딩

CMD ["npm", "start"] # 실행 명령