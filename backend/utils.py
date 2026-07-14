import PyPDF2

def extract_pdf_text(file):
    text = ""

    reader = PyPDF2.PdfReader(file)

    for page in reader.pages:
        page_text = page.extract_text()

        if page_text:
            text += page_text + "\n"

    return text