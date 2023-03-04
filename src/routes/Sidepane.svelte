<div class="side_pane">
    <ul class="nav_main">
		<li><a href="/trial" class="nav_link">Home</a></li>
		<li><a href="/trial" class="nav_link">Listeners</a></li>
		<li><a href="/trial" class="nav_link">Home</a></li>
		<li><a href="/trial" class="nav_link">Listeners</a></li>
    </ul>
    <div class="divider"></div>
    <ul class="nav_sub">
       	<li><a href="/trial" class="nav_link">Home</a></li>
      	<li><a href="/artists" class="nav_link">Browse Artists</a></li>
    </ul>
</div>


<style>
    :root{
        --color-gray: rgb(68, 68, 68);
    }

    .side_pane {
        /* will-change: transform; */
	    /* position: fixed; */
		--background: rgba(255, 255, 255, 0.7)
		float: left;
	    /* background-color:  rgba(243, 230, 230, 0.678); */
	    width: 20%;
	    /* min-width: 200px; */
	    height: 75vh;
	    /* z-index: 10; */
	    box-shadow: 0px 30px 80px 0px rgba(97,45,45,0.25);
	    /* display: block; */
    }

    ul {
		color: var(--color-gray);
        list-style: none;
        background-size: contain;
	}
    ul li {
		margin-left: 1vw;
		margin-bottom: .25vw;
		position: relative;
	}

    .nav_main {
		margin-top: 10vh;
	}

    .nav_sub {
		margin-top: 25vh;
    }

    .nav_link {
	  font-size: 1.5vw;
	  cursor: pointer;
      color: gray;
	}

	.nav_link::before {
		content: '';
		position: absolute;
		width:  2vw;
		height: 2px;
		background-color: gray;
		left: -20vw;
		top: 55%;
		transition: 0.4s;
	}

    .divider {
	    width: 3vw;
	    height: 1px;
		background-color: var(--background);
	    /* background-color: rgba(37,33,32,0.12); */
	    margin: 4vh 6vw;
    }
    
    .nav_link:hover::before {
	  left: -2vw;
      /* color: goldenrod; */
	}

    a:hover {
		color: rgba(160, 84, 54, 0.61);
	}
  
</style>