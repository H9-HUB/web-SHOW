// 给所有卡片绑定点击事件
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const folder = card.dataset.project;   // 例如 "quiz-game"
      window.open(`${folder}/index.html`, '_blank'); // 新标签打开
    });
  });
});