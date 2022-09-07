// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: statechannel/hashlock.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/types"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Hashlock struct {
	Index  string      `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	From   string      `protobuf:"bytes,2,opt,name=from,proto3" json:"from,omitempty"`
	To     string      `protobuf:"bytes,3,opt,name=to,proto3" json:"to,omitempty"`
	Amount *types.Coin `protobuf:"bytes,4,opt,name=amount,proto3" json:"amount,omitempty"`
	Secret string      `protobuf:"bytes,5,opt,name=secret,proto3" json:"secret,omitempty"`
}

func (m *Hashlock) Reset()         { *m = Hashlock{} }
func (m *Hashlock) String() string { return proto.CompactTextString(m) }
func (*Hashlock) ProtoMessage()    {}
func (*Hashlock) Descriptor() ([]byte, []int) {
	return fileDescriptor_63210f2cf5891c5d, []int{0}
}
func (m *Hashlock) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Hashlock) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Hashlock.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Hashlock) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Hashlock.Merge(m, src)
}
func (m *Hashlock) XXX_Size() int {
	return m.Size()
}
func (m *Hashlock) XXX_DiscardUnknown() {
	xxx_messageInfo_Hashlock.DiscardUnknown(m)
}

var xxx_messageInfo_Hashlock proto.InternalMessageInfo

func (m *Hashlock) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *Hashlock) GetFrom() string {
	if m != nil {
		return m.From
	}
	return ""
}

func (m *Hashlock) GetTo() string {
	if m != nil {
		return m.To
	}
	return ""
}

func (m *Hashlock) GetAmount() *types.Coin {
	if m != nil {
		return m.Amount
	}
	return nil
}

func (m *Hashlock) GetSecret() string {
	if m != nil {
		return m.Secret
	}
	return ""
}

func init() {
	proto.RegisterType((*Hashlock)(nil), "ttdung.statechannel.statechannel.Hashlock")
}

func init() { proto.RegisterFile("statechannel/hashlock.proto", fileDescriptor_63210f2cf5891c5d) }

var fileDescriptor_63210f2cf5891c5d = []byte{
	// 252 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xb1, 0x4e, 0xc3, 0x30,
	0x18, 0x84, 0xe3, 0xd0, 0x46, 0x60, 0x24, 0x06, 0x0b, 0x21, 0x03, 0x92, 0x15, 0x31, 0x75, 0xb2,
	0x15, 0xfa, 0x06, 0xb0, 0xb0, 0xb0, 0x74, 0x64, 0x73, 0x5c, 0xd3, 0x44, 0x34, 0xfe, 0xab, 0xf8,
	0x0f, 0x2a, 0x4f, 0x01, 0x8f, 0xc5, 0xd8, 0x91, 0x11, 0x25, 0x2f, 0x82, 0x70, 0x3c, 0x34, 0xdb,
	0xff, 0x9d, 0x4e, 0x77, 0xba, 0x9f, 0xde, 0x7a, 0xd4, 0x68, 0x4d, 0xa5, 0x9d, 0xb3, 0x5b, 0x55,
	0x69, 0x5f, 0x6d, 0xc1, 0xbc, 0xc9, 0x5d, 0x0b, 0x08, 0x2c, 0x47, 0x5c, 0x77, 0x6e, 0x23, 0x8f,
	0x3d, 0x13, 0xb8, 0x11, 0x06, 0x7c, 0x03, 0x5e, 0x95, 0xda, 0x5b, 0xf5, 0x5e, 0x94, 0x16, 0x75,
	0xa1, 0x0c, 0xd4, 0x6e, 0x4c, 0xb8, 0xfb, 0x24, 0xf4, 0xf4, 0x29, 0x86, 0xb2, 0x4b, 0x3a, 0xaf,
	0xdd, 0xda, 0xee, 0x39, 0xc9, 0xc9, 0xe2, 0x6c, 0x35, 0x02, 0x63, 0x74, 0xf6, 0xda, 0x42, 0xc3,
	0xd3, 0x20, 0x86, 0x9b, 0x5d, 0xd0, 0x14, 0x81, 0x9f, 0x04, 0x25, 0x45, 0x60, 0x05, 0xcd, 0x74,
	0x03, 0x9d, 0x43, 0x3e, 0xcb, 0xc9, 0xe2, 0xfc, 0xfe, 0x5a, 0x8e, 0xbd, 0xf2, 0xbf, 0x57, 0xc6,
	0x5e, 0xf9, 0x08, 0xb5, 0x5b, 0x45, 0x23, 0xbb, 0xa2, 0x99, 0xb7, 0xa6, 0xb5, 0xc8, 0xe7, 0x21,
	0x26, 0xd2, 0xc3, 0xf3, 0x77, 0x2f, 0xc8, 0xa1, 0x17, 0xe4, 0xb7, 0x17, 0xe4, 0x6b, 0x10, 0xc9,
	0x61, 0x10, 0xc9, 0xcf, 0x20, 0x92, 0x97, 0xe5, 0xa6, 0xc6, 0xaa, 0x2b, 0xa5, 0x81, 0x46, 0x8d,
	0xc3, 0xd5, 0xe4, 0x39, 0xfb, 0x29, 0xe2, 0xc7, 0xce, 0xfa, 0x32, 0x0b, 0x3b, 0x97, 0x7f, 0x01,
	0x00, 0x00, 0xff, 0xff, 0x25, 0x39, 0xca, 0x46, 0x48, 0x01, 0x00, 0x00,
}

func (m *Hashlock) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Hashlock) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Hashlock) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Secret) > 0 {
		i -= len(m.Secret)
		copy(dAtA[i:], m.Secret)
		i = encodeVarintHashlock(dAtA, i, uint64(len(m.Secret)))
		i--
		dAtA[i] = 0x2a
	}
	if m.Amount != nil {
		{
			size, err := m.Amount.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintHashlock(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if len(m.To) > 0 {
		i -= len(m.To)
		copy(dAtA[i:], m.To)
		i = encodeVarintHashlock(dAtA, i, uint64(len(m.To)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.From) > 0 {
		i -= len(m.From)
		copy(dAtA[i:], m.From)
		i = encodeVarintHashlock(dAtA, i, uint64(len(m.From)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintHashlock(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintHashlock(dAtA []byte, offset int, v uint64) int {
	offset -= sovHashlock(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Hashlock) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovHashlock(uint64(l))
	}
	l = len(m.From)
	if l > 0 {
		n += 1 + l + sovHashlock(uint64(l))
	}
	l = len(m.To)
	if l > 0 {
		n += 1 + l + sovHashlock(uint64(l))
	}
	if m.Amount != nil {
		l = m.Amount.Size()
		n += 1 + l + sovHashlock(uint64(l))
	}
	l = len(m.Secret)
	if l > 0 {
		n += 1 + l + sovHashlock(uint64(l))
	}
	return n
}

func sovHashlock(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozHashlock(x uint64) (n int) {
	return sovHashlock(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Hashlock) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowHashlock
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Hashlock: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Hashlock: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHashlock
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHashlock
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHashlock
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field From", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHashlock
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHashlock
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHashlock
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.From = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field To", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHashlock
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHashlock
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHashlock
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.To = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHashlock
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthHashlock
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthHashlock
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Amount == nil {
				m.Amount = &types.Coin{}
			}
			if err := m.Amount.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Secret", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHashlock
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHashlock
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHashlock
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Secret = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipHashlock(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthHashlock
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipHashlock(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowHashlock
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowHashlock
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowHashlock
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthHashlock
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupHashlock
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthHashlock
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthHashlock        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowHashlock          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupHashlock = fmt.Errorf("proto: unexpected end of group")
)
