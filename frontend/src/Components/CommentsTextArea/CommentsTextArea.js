import React from "react";

import "./CommentsTextArea.css";

export default function CommentsTextArea() {
  return (
    <div class="comments">
      <span class="comments__title">دیدگاهتان را بنویسید</span>
      <span class="comments__text">
        <a href="#">با عنوان محمدامین سعیدی راد وارد شده اید.</a>
        <a href="#">خارج میشوید? </a>
        بخش های موردنیاز علامت گذاری شده اند *
      </span>
      <div class="comments_content">
        <span class="comments__content-title">دیدگاه *</span>
        <textarea class="comments__content-textarea"></textarea>
      </div>
      <button type="submit" class="comments__button" onClick={() => console.log('کامنت ثبت شد')}>
        فرستادن دیدگاه
      </button>
    </div>
  );
}
