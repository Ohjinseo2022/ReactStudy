const Post = () => {
  return (
    <article class="post_desc">
      <header class="post_header">
        <div class="post_avatar">
          <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
        </div>
        <div class="post_info">
          <a href="./myblog.html">
            <div class="post_email">korpg95274</div>
            <div class="post_date">
              2022.07.21 <span>하루 전</span>
            </div>
          </a>
        </div>
      </header>
      <div class="post_buttonBox">
        <button>수정</button>
        <button class="post_del_btn">삭제</button>
      </div>
      <textarea class="post_editForm"></textarea>
      <div class="post_content">안녕하세요, 반가운 하루입니다.</div>
      <p class="post_more">더 보기</p>
      <div class="post_comment_header">
        <div class="post_comment_total">댓글 2개</div>
        <div class="post_comment_Btn">댓글 달기</div>
      </div>
    </article>
  );
};

export default Post;
