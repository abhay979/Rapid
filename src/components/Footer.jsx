import './footer.css'
import { GitHub,Instagram,LinkedIn,Twitter} from '@mui/icons-material'
export const Footer = () => {
    return (
        <>
    <footer className="site-footer" > 
      <div className="container" >
        <div className="row" style={{display:"flex",justifyContent:"space-between"}}>
          <div>
            <p className="copyright-text" style={{color:"whitesmoke",marginLeft:"20px"}}>Copyright &copy; Rapid 
            <br></br> 2023 All Rights Reserved
            </p>
          </div>
          <div class="cardsocial">
  <span>Social</span>
  <div class="social-link" >
   <GitHub sx={{color:"black"}}/>
  </div>
  <div class="social-link"  >
    <LinkedIn sx={{color:"#0073b2"}}/>
  </div>
  <div class="social-link"  >
   <Instagram sx={{color:"#df0288"}}/>
  </div>
  <div class="social-link"  >
<Twitter sx={{color:"#4a9bd9"}} />
  </div>
</div>
        
        </div>
      </div>
</footer>
        </>
    )
}