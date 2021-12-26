import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react"
import "./posts.css"

function InitDetail () {
  const [obj, setObj] = useState({});
  let params = useParams();
  console.log(params, 'params===');
  const { id } = params;

  useEffect(() => {
    async function fetchData () {

      let res = await axios.get(`/.netlify/functions/getById?id=${id}`);
      console.log(res.data.data, 'res.data.data==');
      setObj({ ...res.data.data[0] });

    }
    fetchData()
  }, [id])

  return (
    <div className="posts-detail">
      <h1 className="posts-title">
        <span className="title">{obj.title}</span>
        <span className="time">发布时间：{obj.createTime || '暂无'}</span>
      </h1>
      <p className="posts-content">
        {obj.contents}
      </p>
    </div>

  )
}


export default InitDetail


