    let mychart=null
    export default function graficos(novo_grafico, porcentagem, resto, fontSize, color, header){
        
        if(mychart!=null && header){
        mychart.destroy()
    }
        const valor={
        id:'valor',
        afterDraw(chart, args, options){
            const {ctx, chartArea:{left, right, top, bottom}}=chart
            ctx.save(),
            ctx.font=options.font
            ctx.fillStyle=options.color
            ctx.textAlign='center'
            ctx.textBaseline='middle'
            ctx.fillText(options.text, (left+right)/2, (top+bottom)/2)
        
        }
    }


        
        porcentagem=parseInt(porcentagem)
        
    mychart = new Chart(novo_grafico, {
        type: 'doughnut',
        data: {
            labels: ['Concluído', 'Restante'],
            datasets: [{
            data: [porcentagem, resto],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)', 
                'rgba(200, 200, 200, 0.3)'
            ],
            borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
            legend: { display: false }, 
            tooltip: { enabled: false }, 
            valor:{
                text:`${porcentagem}%`,
                color: color,
                font:`bold ${fontSize}px arial`

            }
            
            },
            cutout: '70%' 
        },
        plugins:[valor]
    });
    
}