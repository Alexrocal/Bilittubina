import PptxGenJS from 'pptxgenjs';
import slidesData from '../data/slides.json';

const pptx = new PptxGenJS();

slidesData.forEach(slide => {
    let slideInstance = pptx.addSlide();
    slideInstance.addText(slide.title, { x: 0.5, y: 0.5, fontSize: 24, color: '0070C0' });
    slideInstance.addText(slide.content, { x: 0.5, y: 1, fontSize: 18 });
});

pptx.writeFile({ fileName: 'output/Rotacion_Cribado_Neonatal_Analisis_Clinicos.pptx' });