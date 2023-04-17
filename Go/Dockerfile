### Use golang:1.15 as base image for building the application
FROM golang as GoBuilder

WORKDIR /usr/app/go

COPY . .

RUN GOOS=linux go build main.go

FROM scratch
WORKDIR /usr/app/go
COPY --from=GoBuilder /usr/app/go .


ENTRYPOINT ["./main"]