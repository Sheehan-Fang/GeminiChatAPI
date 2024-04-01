import requests
import json

def send_post_request(url, json_data):
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, data=json.dumps(json_data), headers=headers)
    return response

# 示例URL和JSON数据
api_url = 'https://example.vercel.app/api/text'
json_data = {"prompt": "你好,请介绍一下你自己"}

# 发送POST请求
response = send_post_request(api_url, json_data)

# 打印响应内容
print(response.text)