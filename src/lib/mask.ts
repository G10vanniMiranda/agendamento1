// Esta função aplica a máscara de CEP (formato: 99999-999)
export function formatCep(value: string): string {
    if (!value) return "";
    return value
        .replace(/\D/g, '') // Remove todos os caracteres não numéricos
        .replace(/^(\d{5})(\d)/, '$1-$2') // Adiciona o hífen após o 5º dígito
        .slice(0, 9); // Garante que o comprimento máximo seja 9
}

// Esta função aplica a máscara de CPF (formato: 999.999.999-99)
export function formatCpf(value: string): string {
    if (!value) return "";
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
        .slice(0, 14);
}

// Esta função aplica a máscara de Moeda (formato: R$ 1.234,56)
export function formatCurrency(value: string): string {
    if (!value) return "";
    const numValue = value.replace(/\D/g, '');
    const floatValue = parseFloat(numValue) / 100;

    if (isNaN(floatValue)) return "";

    return floatValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

// [NOVO] Esta função aplica a máscara de Telefone (formato: (99) 99999-9999)
export function formatPhone(value: string): string {
    if (!value) return "";
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d{4})$/, '$1-$2')
        .slice(0, 15);
}