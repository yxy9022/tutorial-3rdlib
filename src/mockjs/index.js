/**
 * 说明：一个用于生成模拟数据的 JavaScript 库。它主要用于前端开发和测试，能在没有真实后端 API 的情况下，帮助开发者快速构建和调试前端应用。
 * Mock.js 提供了一种简洁且灵活的方法来生成随机数据，以模拟真实的网络请求和响应。
 * 链接：http://mockjs.com/
 * https://github.com/nuysoft/Mock/wiki/Getting-Started
 */
const express = require('express');
const Mock = require('mockjs');
const app = express();
const port = 3000;

// 定义 Mock 接口
app.get('/mock/api/data', (req, res) => {
  const mockData = Mock.mock({
    'list|5-10': [
      {
        'id|+1': 1,
        'user_id|+1': 1,
        name: '@name',
        nick_name: '@name',
        'flow|0,10000': 1,
        'total_flow|0,10000': 1,
        'consume_flow|0,10000': 1,
        'age|18-40': 20,
        email: '@EMAIL'
      }
    ]
  });

  res.json(mockData);
});

// 定义 Mock 接口
app.get('/mock/api/data-list', (req, res) => {
  const page = parseInt(req.query.page || 1) || 1;
  const limit = parseInt(req.query.limit || 10);
  const total = 100; // 假设总共有100个用户
  const start = (page - 1) * limit;
  const end = start + limit;
  // 生成用户数据
  const users = Mock.mock({
    'list|100': [
      {
        'id|+1': 1,
        'user_id|+1': 1,
        name: '@name',
        nick_name: '@name',
        'count|0-10000': 1,
        'age|18-40': 20,
        email: '@EMAIL'
      }
    ]
  }).list;
  // 返回当前页的数据
  return res.json({
    code: 200,
    message: 'success',
    data: {
      total: total,
      page: page,
      limit: limit,
      rows: users.slice(start, end) // 根据当前页和每页限制切片用户数据
    }
  });
});

// 启动Mock服务
app.listen(port, () => {
  console.log(`Mock service is running at http://localhost:${port}`);
});
