using System;
using System.ComponentModel;
using System.Globalization;

namespace EventToolsCore.Domain.Utilities
{
    public class IdentifierConverter : TypeConverter
    {
        public override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)
        {
            if (sourceType == typeof(string) || sourceType == typeof(int))
            {
                return true;
            }
            return base.CanConvertFrom(context, sourceType);
        }

        public override object ConvertFrom(ITypeDescriptorContext context,
            CultureInfo culture, object value)
        {
            switch (value)
            {
                case string s:
                    return new Identifier(s);
                case int i:
                    return new Identifier(i);
            }
            return base.ConvertFrom(context, culture, value);
        }
    }
}
