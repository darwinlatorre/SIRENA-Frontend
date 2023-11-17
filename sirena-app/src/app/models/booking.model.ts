export interface Booking{
    rsv_id: number,
    rsv_fecha_solicitud: Date,
    rsv_fecha_reserva_inicio: Date,
    rsv_hora_fin: Date,
    rsv_num_estudiantes: number,
    rsv_estado: string,
    rsv_detalles: string,
    rsv_incidencia_id: number | null,
    rsv_cls_id: number,
    rsv_usr_id:number
}