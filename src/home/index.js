import React, { useState, useEffect } from "react"
import axios from 'axios';
import "./home.css"
import { useNavigate } from "react-router-dom"


function ArticleListInit () {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  function handleClick (id) {
    navigate(`/posts/${id}`)
  }
  useEffect(() => {
    async function fetchData () {

      let res = await axios.get('/.netlify/functions/postAll');
      console.log(res.data.data, 'res.data.data==');
      setData(res.data.data);

    }
    fetchData()
  }, [])


  return ((data || []).map((item, index) =>
    <div className="posts-item" onClick={() => handleClick(item._id)} key={index}>
      <div className="posts-title">
        <span className="title">{item.title}</span>
        <span className="time">发布时间：{item.createTime || '暂无'}</span>
      </div>
      <div className="posts-cont" title={item.description}>{item.description}</div>
    </div>
  ))
}

function Home () {
  return (
    <div className="home">
      <div className="banner">
        <p>传统文化的继承和发扬，不只是新建博物馆或保存声音与影像。</p>
        <p>应该是一种融入人群的生活方式和行为准则。</p>
      </div>
      <div className="posts-list">
        {
          ArticleListInit()
        }
      </div>
    </div>
  )
}


export default Home


