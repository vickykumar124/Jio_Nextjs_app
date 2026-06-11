
import './App.css';

function loadScript() {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve();
    }
  script.onerror = () => {
  reject(new Error("Razorpay SDK failed to load"));

    }
    document.body.appendChild(script);
  })
}

function App() {

  async function openRazorPayCheckout() {
    try {
      // 1. making request to backend
      const resp = await
        fetch("http://localhost:3400/checkout",
          { method: "POST" });
      const data = await resp.json();
      const order = data.order;


          // 👇 Yahan lagao
    console.log("Backend Data:", data);
    console.log("Order:", order);
    console.log("Order ID:", order?.id);
      // load razorpayscript
      await loadScript();
     console.log("Razorpay Object:", window.Razorpay);
      const finalOrderObject = {
       key: "rzp_test_SzzdoZizosXbRG",
        "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": order.currency,
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://picsum.photos/200/300",
        "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
     handler: async function (response) {
     console.log("PAYMENT SUCCESS", response);
  alert(response.razorpay_payment_id);
  alert(response.razorpay_order_id);
  alert(response.razorpay_signature);


        },
        "prefill": {
          "name": "Vicky Kumar",
          "email": "vicky@example.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      }
      
      // order create 
     const rzp1 = new window.Razorpay(finalOrderObject);
      rzp1.open();
      // // error handling
      rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

    } catch (err) {

    }


  }


  return (
    <>
      <h1>Payment DEMO</h1>
      <a style={{ cursor: "pointer" }}
        onClick={openRazorPayCheckout}
      > Pay for 100</a>
    </>
  )
}

export default App



