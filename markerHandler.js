AFRAME.registerComponent("marker-handler", {
    init: async function() {
        this.el.addEventListener("markerFound",()=>{
            console.log("MARKER IS FOUND")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("MARKER IS LOST")
            this.handleMarkerLost()
        })

    },
    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="flex";
        var orderButton=document.getElementById("order-button");
        var orderSummaryButton=document.getElementById("order-summary-button");
        orderButton.addEventListener("click", () => {
            swal({
                icon:"https://i.imgur.com/4NZ5uLY.jpg",
                title:"Thank You For Ordering!",
                text:" ",
                timer: 2000,
                buttons: false
            })
        })
        orderSummaryButton.addEventListener("click",() => {
            swal ({
                icon:"warning",
                title:"Order Summary",
                text:"Work In Progress"
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="none"
    }
})