const products=[['STEM Card Kit',10],['Plaster & Paint Kit',10],['Wood Shapes Kit',11],['Draw & Paint Canvas',8],['Xmas Hand Drawn Canvas',8],['Glass Bead Bracelet',10],['Seed Bead Bracelet',5],['Bag Charms',10],['Kids Keyrings',5],['Make Your Own Bracelet',2]];const c=document.getElementById('products');products.forEach((p,i)=>c.innerHTML+=`<div class=card><h3>${p[0]}</h3><p>$${p[1]}</p><input type=number min=0 value=0 id=q${i} onchange=update()></div>`);function build(){let t=0,s='';products.forEach((p,i)=>{let q=+document.getElementById('q'+i).value||0;if(q){let st=q*p[1];t+=st;s+=`${q} x ${p[0]} = $${st}
`;}});s=`Customer: ${name.value}
Phone: ${phone.value}
Email: ${email.value}

ORDER

`+s+`
TOTAL = $${t}

Comments:
${comments.value}`;summary.textContent=s;total.textContent=t;return s;}function update(){build()}function emailOrder(){let b=encodeURIComponent(build());location.href='mailto:stem@smartlivinghome.com.au?subject=Bead%20%26%20Brush%20Order&body='+b;}function copyOrder(){navigator.clipboard.writeText(build());alert('Order copied');}function printOrder(){build();let w=window.open('');w.document.write('<pre>'+summary.textContent+'</pre>');w.print();}update();