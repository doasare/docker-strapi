FROM node:18
# alternatively you can use FROM strapi/base:latest

# Set up working directory
WORKDIR /app

# Copy package.json to root directory
COPY package.json .

# Copy yarn.lock to root directory
COPY yarn.lock .

# Install dependencies, but not generate a yarn.lock file and fail if an update is needed
RUN yarn install --frozen-lockfile

RUN yarn add pg --save

# Copy strapi project files
COPY favicon.png ./favicon.png
COPY src/ src/
COPY public/ public/
COPY database/ database/
COPY config/ config/
# ...

# Set the APP_KEYS environment variable
ENV APP_KEYS=0bBL27v6bolRSw/YjYV1wQ==,PyY3I3Sp1L92QEHEc0N5aw==,ZBsfP4iXOp/nPMG+5HjUBA==,S1q4WVhINLsQlej/7GHaOA==
ENV API_TOKEN_SALT=R80btlrHPPDDDpSzA4wD2w==
ENV ADMIN_JWT_SECRET=FSvbUpVRmXKBbNVEfKGkWw==
ENV TRANSFER_TOKEN_SALT=82UoIg4LWL9ROTqWsAzUgg==
ENV JWT_SECRET=+As5O382mFBXAxsS01p+9w==
ENV PORT=80
#Test
# Build admin panel
RUN yarn build

# Run on port 1337
EXPOSE 80

CMD ["yarn", "run", "develop"]
# Start strapi server
#CMD ["yarn", "start"]
