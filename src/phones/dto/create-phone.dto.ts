import { ApiProperty } from '@nestjs/swagger';

export class CreatePhoneDto {
     
  @ApiProperty() 
  number: string; 

  @ApiProperty()  
  userId: string;
 
}







