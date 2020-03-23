import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
    margin: 15px;
    background: #fff;
    border-radius: 4px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    min-height: 330px;
    max-height: 350px;
`;

export const ProductInfo = styled.View`
    margin: 10px;
    flex-direction: row;
    width: 175px;
    align-items: center;
`;

export const ProductImage = styled.Image`
    width: 80px;
    height: 80px;
    margin-right: 10px;
`;

export const ProductTitle = styled.Text`
    font-size: 16px;
`;

export const ProductPrice = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const ProductControls = styled.View`
    background: #EDEDED;
    padding: 10px;
    border-radius: 4px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ProductAmount = styled.TextInput.attrs({
    editable: false,
})`
    margin: 0 5px;
    background: #fff;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 2px 10px;
    text-align: center;
    color: #888;
`;

export const ProductSubTotal = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;

export const Controls = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonControl = styled.TouchableOpacity``;

export const TotalContainer = styled.View`
    margin-top: 20px;
`;

export const TotalText = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #999;
`;

export const TotalTextPrice = styled.Text`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const TotalButton = styled.TouchableOpacity`
    background: #7159c1;
    padding: 12px;
    border-radius: 4px;
`;

export const TotalButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;

export const EmptyCart = styled.View`
    padding: 40px 10px;
    align-items: center;
`;

export const EmptyText = styled.Text`
    color: #777;
    font-size: 18px;
`;
