export default {
  data() {
    return { title: document.title };
  },
  template: `
<nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">{{ title }}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/offthetracks">Off The Tracks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/offthetracks/privacy.html">Privacy</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
};
