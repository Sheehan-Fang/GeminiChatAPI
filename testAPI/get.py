import requests

def send_get_request(url, params=None):
    response = requests.get(url, params=params)
    return response

# 示例URL和参数
api_url = 'https://example.vercel.app/api/text'
params = {"param1": "value1", "param2": "value2"}

# 发送GET请求
response = send_get_request(api_url, params)

# 打印响应内容
print(response.text)