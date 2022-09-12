import { ICar } from '../../../entities'

type Props = {
  car: ICar
}

export function CarDetails({ car }: Props) {
  const { model, brand, registrationPlate } = car

  return <span>{`${model}/${brand.name} - ${registrationPlate}`}</span>
}
