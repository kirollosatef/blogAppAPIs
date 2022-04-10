function getBlogIdToDelete(blogId) {
  document.getElementById("blogIdToDelete").value = blogId;
}
function getBlogIdToUpdate(blogId) {
  let oldTitle = document.getElementById(`title${blogId}`).innerText;
  let oldContent = document.getElementById(`content${blogId}`).innerText;
  document.getElementById("blogIdToUpdate").value = blogId;
  document.getElementById("blogTitleToUpdate").value = oldTitle;
  document.getElementById("blogContentToUpdate").value = oldContent;
}
