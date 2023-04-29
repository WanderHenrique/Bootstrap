<><ul class="nav">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Item 1</a></li>
            <li><a class="dropdown-item" href="#">Item 2</a></li>
            <li><a class="dropdown-item" href="#">Item 3</a></li>
        </ul>
    </li>
</ul><script>
        let dropdown = document.querySelector('.dropdown');
        let dropdownMenu = document.querySelector('.dropdown-menu');

        dropdown.addEventListener('mouseover', function() {dropdownMenu.classList.add('show')};
        {"}"});

        dropdown.addEventListener('mouseout', function() {dropdownMenu.classList.remove('show')};
        {"}"});
    </script>
let cards = document.querySelectorAll('.card');
let maxHeight = 0;

cards.forEach(function(card) {
    if (card.offsetHeight > maxHeight) {
        maxHeight = card.offsetHeight;
    }
});

cards.forEach(function(card) {
    card.style.height = maxHeight + 'px';
});
    
    <script>
        let cards = document.querySelectorAll('.card');
        let maxHeight = 0;

        cards.forEach(function(card) { }
        if (card.offsetHeight {">"} maxHeight) {maxHeight = card.offsetHeight};
        {"}"}
        {"}"});

        cards.forEach(function(card) {card.style.height = maxHeight + 'px'};
        {"}"});
    </script></>