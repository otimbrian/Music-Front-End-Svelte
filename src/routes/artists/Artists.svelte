<div class="page" id="curator" style="display: block;">
    <div class="curator_title_wrapper" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"><span>LP</span>
      <div class="curator_line"></div>
      <div class="curator_title">Listeners</div>
      <div class="curator_line"></div><span>14</span>
    </div>
    <div class="curator_list" style="display: block; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
      <div class="curator_list_content">
        <div class="connect_btn_wrapper item" style="transform: matrix(1, 0, 0, 1, 0, 0);">
          <div class="connect_btn">
            <div class="connect_btn_text">Connect <br>SoundCloud</div>
          </div>
        </div>
        <div class="curator_list_content_desc">Or Select <br>a Listener of <br>L.P.			</div>
        <div class="item" style="transform: matrix(1, 0, 0, 1, 0, 0);">
          <div class="thumb" style="background-image: url(https://i1.sndcdn.com/avatars-000202649537-6368nw-t250x250.jpg);"></div>
          <div class="info" style="opacity: 0;">
            <div class="name">Fantasy</div>
            <div class="desc">Sam</div>
          </div>
        </div>
        <div class="item" style="transform: matrix(1, 0, 0, 1, 0, 0);">
          <div class="thumb" style="background-image: url(https://i1.sndcdn.com/avatars-000249865900-64rve1-t250x250.jpg);"></div>
          <div class="info" style="opacity: 0;">
            <div class="name">Fantasy</div>
            <div class="desc">Sam</div>
          </div>
        </div>
        <div class="item" style="transform: matrix(1, 0, 0, 1, 0, 0);">
          <div class="thumb" style="background-image: url(https://i1.sndcdn.com/avatars-000270812013-6zuevs-t250x250.jpg)"></div>
          <div class="info" style="opacity: 0;">
            <div class="name">Fantasy</div>
            <div class="desc">Sam</div>
          </div>
        </div>
        <div class="item">
          <div class="thumb" style="background-image: url(https://i1.sndcdn.com/avatars-000187841543-7rhmm0-t250x250.jpg)"></div>
          <div class="info">
            <div class="name">Fantasy</div>
            <div class="desc">Sam</div>
          </div>
        </div>
        <div class="item">
          <div class="thumb" style="background-image: url(https://i1.sndcdn.com/avatars-000248045110-uq3jhv-t250x250.jpg);"></div>
          <div class="info">
            <div class="name">Fantasy</div>
            <div class="desc">Sam</div>
          </div>
        </div>
        <div class="item">
          <div class="thumb" style="background-image: url(https://i1.sndcdn.com/avatars-000276749358-7c1upz-t250x250.jpg);"></div>
          <div class="info">
            <div class="name">Fantasy</div>
            <div class="desc">Sam</div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <style>
    :root{
        --color-bg: #F2D7D3;
        --color-light: #fff9e1;
        --color-black: #252120;
        --color-gray: rgb(68, 68, 68);
    }
    

    .page {
        display: block;
        /* background-color: red; */
        /* float: left; */
    }

    #curator {
        width: 100%;
        height: 100%;
        position: fixed;
        text-align: center;
        color: var(--color-black);
        display: none;
    }

	#curator .curator_title_wrapper  {
		position: fixed;
		margin-top: 17.55vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
    }
		
	#curator span {
		font-size: 2.16vh;
	}
		
	#curator .curator_title {
		font-size: 7.425vh;
	}
		
	#curator .curator_line {
		width: 30px;
		height: 2px;
		border-radius: 2px;
		margin: 0 30px;
		background-color: var(--color-black);
	}


/* // ===== Curator List ===== */
    .curator_list {
        position: absolute;
        text-align: center;
        font-size: 14px;
        width: 100vw;
        height: 100%;
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;
        /* // overflow: auto; */
        opacity: 0;
    }

    .connect_btn {
        border-radius: 50%;
        width: 18vh;
        height: 18vh;
        background-image: linear-gradient(280deg, rgb(47, 42, 41) 0%, rgb(47, 42, 41) 100%);
        color: #f1dfdd;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
    }
	
	.connect_btn .connect_btn_text {
		z-index: 9;
	}
    .connect_btn:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: opacity 0.5s ease-out;
        opacity: 0;
        background-image: linear-gradient(225deg, rgb(255, 103, 0) 0%, rgb(255, 45, 240) 100%);
        transition: 0.5s;
    }

    .connect_btn:hover:before {
        opacity: 1;
    }



    .curator_list_content_desc {
        position: relative;
        pointer-events: none;
        margin: 0 20px;
        margin-bottom: 60px;
    }

    .curator_list_content {
        padding: 0 50px;
        white-space: nowrap;
        text-align: left;
        /* // width: 1600px; */
        /* // width: 100%; */
        position: absolute;
        top: 50%;
        margin-top: -6.6666666667vh;
        display: flex;
        align-items: center;

    }

	.curator_list_content .item {
		cursor: pointer;
		/* // width: 18vh; */
		height: 25vh;
		margin: 0 20px;
	}
	
	.item:active {
		transform: scale(0.95);
	}
	
	.info {
		opacity: 0;
	}
	
	.info .name, .info .desc {
		font-size: 13px;
        color: #f1dfdd;
        clear: both;
        position: relative;
        padding: 0 3px 1px 3px;
        background-color: #252120;
		display: inline-block;
		/* float: left; */
		clear: both;
		border-radius: 3px 3px 0px 0px;
	}
	
	.thumb {
		border-radius: 50%;
        width: 18vh;
        height: 18vh;
        background-size: cover;
        margin-bottom: 20px;
		transition: 0.5s;
	}


    /* .shadow {
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.4);
    } */
  </style>