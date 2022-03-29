function getBlogId(blogId) {
  setOldData(blogId);
}
function getBlogIdToDelete(blogId) {
  document.getElementById("blogIdToDelete").value = blogId;
}
function setOldData(blogId) {
  let oldTitle = document.getElementById(`title${blogId}`).innerText;
  let oldContent = document.getElementById(`content${blogId}`).innerText;
  document.getElementById("blogIdToUpdate").value = blogId;
  document.getElementById("oldTitle").value = oldTitle;
  document.getElementById("oldContent").value = oldContent;
}
