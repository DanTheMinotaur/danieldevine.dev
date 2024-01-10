#!/bin/bash

cd backend
yarn develop &

cd ../frontend
yarn serve &

wait
