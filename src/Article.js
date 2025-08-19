import Pagination from 'react-bootstrap/Pagination';
import { useState } from "react";

function Table1(){
    return <div class="content">
  <h1 class="page-title">My Articles</h1>

  <table id="table-design">
    <thead>
      <tr>
        <th>Title</th>
        <th>Status</th>
        <th>Last Edited</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Art of Storytelling: A Guide to Captivating Your Audience</td>
        <td>Published</td>
        <td>2 days ago</td>
      </tr>
      <tr>
        <td>Crafting Compelling Characters: A Step-by-Step Approach</td>
        <td>Draft</td>
        <td>1 week ago</td>
      </tr>
      <tr>
        <td>Mastering Dialogue in Fiction: Techniques for Realistic Conversations</td>
        <td>Published</td>
        <td>2 weeks ago</td>
      </tr>
    </tbody>
  </table>
</div>
}




function Table2(){
    return <div class="content">
  <h1 class="page-title">My Articles</h1>

  <table id="table-design">
    <thead>
      <tr>
        <th>Title</th>
        <th>Status</th>
        <th>Last Edited</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Introduction to React: Building Your First Component</td>
        <td>Published</td>
        <td>2 days ago</td>
      </tr>
      <tr>
        <td>Getting Started with Bootstrap and Responsive Design</td>
        <td>Draft</td>
        <td>1 week ago</td>
      </tr>
      <tr>
        <td>Understanding JavaScript ES6 Features</td>
        <td>Published</td>
        <td>2 weeks ago</td>
      </tr>
    </tbody>
  </table>
</div>
}


function Table3(){
    return <div class="content">
  <h1 class="page-title">My Articles</h1>

  <table id="table-design">
    <thead>
      <tr>
        <th>Title</th>
        <th>Status</th>
        <th>Last Edited</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Building a Sidebar Navigation with React and CSS</td>
        <td>Draft</td>
        <td>3 weeks ago</td>
      </tr>
      <tr>
        <td>Deploying a React App to GitHub Pages</td>
        <td>Published</td>
        <td>1 month ago</td>
      </tr>
    </tbody>
  </table>
</div>
}




function AdvancedExample() {
  const [page, setPage] = useState(1);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(3, p + 1)); 

  return (
    <div>
      {page === 1 && <Table1 />}
      {page === 2 && <Table2 />}
      {page === 3 && <Table3 />}
      
      <Pagination className="mt-3">
        <Pagination.Prev onClick={goPrev} disabled={page === 1} />
        <Pagination.Item active={page === 1} onClick={() => setPage(1)}>1</Pagination.Item>
        <Pagination.Item active={page === 2} onClick={() => setPage(2)}>2</Pagination.Item>
        <Pagination.Item active={page === 3} onClick={() => setPage(3)}>3</Pagination.Item>
        <Pagination.Next onClick={goNext} disabled={page === 3} />
      </Pagination>
      
    </div>
  );
}



export {Table1,Table2,Table3,AdvancedExample};