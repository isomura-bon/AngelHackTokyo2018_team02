#!/bin/sh

curl -X POST http://localhost:3000/users/regist -H "Content-Type: application/json" -H "Accept: application/json" -d '{"username":"田中裕二","userid":"1","gcm":"xxxx","status":"true","disease":"発達障害","jobIndustry":"IT"}'

curl -X POST http://localhost:3000/users/regist -H "Content-Type: application/json" -H "Accept: application/json" -d '{"username":"小林拓馬","userid":"2","gcm":"xxxx","status":"true","disease":"発達障害","jobIndustry":"IT"}'

curl -X POST http://localhost:3000/users/regist -H "Content-Type: application/json" -H "Accept: application/json" -d '{"username":"山田花子","userid":"3","gcm":"xxxx","status":"false","disease":"発達障害","jobIndustry":"事務"}'

curl -X POST http://localhost:3000/users/regist -H "Content-Type: application/json" -H "Accept: application/json" -d '{"username":"加藤康","userid":"4","gcm":"xxxx","status":"false","disease":"発達障害","jobIndustry":"事務"}'

curl -X POST http://localhost:3000/users/regist -H "Content-Type: application/json" -H "Accept: application/json" -d '{"username":"中村実","userid":"5","gcm":"xxxx","status":"true","disease":"発達障害","jobIndustry":"IT"}'

