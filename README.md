# GeoIP Lambda

## Installation

First, install and configure [up](https://up.docs.apex.sh/).

Then clone repo and setup `up.json`.

```shell
git clone https://github.com/stepankuzmin/geoip-lambda.git
cd geoip-lambda
cp example.up.json up.json
```

Download [GeoLite2 City database](https://dev.maxmind.com/geoip/geoip2/geolite2/) and place it into `data` folder.

## Deploy

```shell
up
```

## Usage

```shell
curl `up url` | jq
```
